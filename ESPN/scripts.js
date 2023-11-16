const dropdownContent = 
'<ul><li><a class="droplink" href="javascript:0">NBA Front Page</a></li>'
    + '<li><a class="droplink" href="javascript:0">Scoreboard</a></li>'
    + '<li><a class="droplink" href="javascript:0">Daily Dime</a></li>'
    + '<li><a class="droplink" href="javascript:0">2007 NBA Playoffs</a></li></ul>'

const links = document.querySelectorAll(".link")
links.forEach(element => { 
    element.innerHTML += dropdownContent;
    const link = element.lastChild;
    console.log(link)
    element.addEventListener('click', function() {
        link.style.display = 'block'
    })
    window.addEventListener('click', function(event) {
        if (event.target != link && !element.contains(event.target)){
            console.log(event)
            console.log(link);
            link.style.display = 'none'
        }
    })    
});
