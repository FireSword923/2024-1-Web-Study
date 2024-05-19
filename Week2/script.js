var hw = document.getElementById('hw');

hw.addEventListener('click', function() {
    var msg = document.getElementById('msg');
    
    if (msg.style.color == 'blue')
        {
            msg.style.color = "red";
            this.value = "Change Blue";
            this.style.color = "blue";
        }
    else
    {
        msg.style.color = "blue";
        this.value = "Change Red";
        this.style.color = "red";
    }
})