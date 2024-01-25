class App
{
    runApplication()
    {
        console.log("hello world")

        let title = document.getElementById("newstitle")
        console.log(title);

        let random = Math.random();
        console.log(random);

        if(random < 0.2)
        {
            title.style.backgroundColor = "#FF0000";
        }

        if(random > 0.2 && random < 0.6)
        {
            title.style.backgroundColor = "#33cccc";
        }

        if(random > 0.6 && random < 0.75)
        {
            title.style.backgroundColor = "#ff9966";
        }

        if(random > 0.75)
        {
            title.style.backgroundColor = "#006600";
        }

        //gamenews
        
        let newsitem1 = document.getElementsByClassName("gamenews")[0]

        let newsitem2 = document.getElementsByClassName("gamenews")[1]

        let gamenews = document.getElementsByClassName("gamenews")
        console.log(title);

        if(random < 0.2)
        {
            newsitem1.style.backgroundColor = "#FF0000";
        }

        if(random > 0.2 && random < 0.6)
        {
            newsitem1.style.backgroundColor = "#33cccc";
        }

        if(random > 0.6 && random < 0.75)
        {
            newsitem1.style.backgroundColor = "#ff9966";
        }

        if(random > 0.75)
        {
            newsitem1.style.backgroundColor = "#006600";
        }

        if(random < 0.2)
        {
            newsitem2.style.backgroundColor = "#FF0000";
        }

        if(random > 0.2 && random < 0.6)
        {
            newsitem2.style.backgroundColor = "#33cccc";
        }

        if(random > 0.6 && random < 0.75)
        {
            newsitem2.style.backgroundColor = "#ff9966";
        }

        if(random > 0.75)
        {
            newsitem2.style.backgroundColor = "#006600";
        }

        document.getElementById("newstitle");
        document.getElementById("gamenews headline");
        document.getElementById("gamenews");
    }
}

let app = new App();
app.runApplication();