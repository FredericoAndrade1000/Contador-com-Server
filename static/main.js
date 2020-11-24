var numb = 0
        
        const socket = io.connect('http://localhost:8080')
        
        socket.on('numb', function(number){
                numb = number
            })
        update()
        function update(){
            document.getElementById("number").innerHTML = numb
            requestAnimationFrame(update)
        }
        
        function add(n){
            socket.emit('opNumb', n)
        }
