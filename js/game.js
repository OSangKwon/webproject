        var input=[];
        var num = 3; //가로 세로
        var cnt = 3; //몇개?
        var score = Number(0);
        var level = 1;
        var lives = 3;
        var rank = [3,3,4,3,4,4,4,4,4,5,5,4,5,5,5,5,5,6,6,5,6,5,6,6,6,6,6,7,6,7];
        var time = 0;
        for(var i=0; i< cnt ; i++)
        {
            input[i] = getRandomInt(0,num*num);
            for(var j=0; j<i ;j++){
                if(input[i]==input[j])
                    {
                        i= i-1;
                        break;
                    }
            }
        }
        console.log(input);
        document.write("<h1 align=center style='color:white'>level: "+level+" lives: "+lives+"</h1>");
		printTable();
        for(var i=0;i<cnt;i++)
        {
            var x;
            var y;
            x = parseInt(input[i]/num);
            y = input[i]%num;
            console.log(x);
            console.log(y);
            document.getElementById(""+x+y).style.backgroundColor = "white";
        }
        var sec = 3;
        var timer = setInterval(function(){
            sec--;
            time++;
            if(sec==0)
            {
                location.href="game2.html?input="+input+"&score="+score+"&level="+level+"&lives="+lives+"&time="+time;
            }
            document.getElementById('timer').innerHTML = sec;
        },1000);

		function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
        }
		function printTable(){
			document.write("<table border=0>");
			var i, j;
			for(i=0;i<num;i++)
			{
                document.write("<tr>");
				for(j=0;j<num;j++)
				{
					document.write("<td>" +"<input style='width:"+500/num+"pt;height:"+500/num+"pt;border-radius: 30px;' type='button' value='' id='"+i+j+"'></input>" +"</td>");
                    document.getElementById(""+i+j).style.backgroundColor = "black";
				}
				document.write("</tr>NN");
			}
			document.write("</table>");
		}