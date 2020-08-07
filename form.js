class Form {
    constructor(){
        this.input = createInput("NAME");
        this.input1 = createInput("EMAIL ID");
        this.button1 = createButton('NEXT');
        this.button4 = createButton('END');
        this.button = createButton('START SURVEY');
        this.greeting = createElement('h3');
        this.greeting1 = createElement('h3');
        this.greeting2 = createElement('h3');
        this.greeting3 = createElement('h3');
        this.ans= createRadio('h1');
        this.ans.option('yes');
        this.ans.option('no');
    }

    display(){
        var title = createElement('h2');
        title.html("SURVEY");
        title.position(450,20);

        this.input.position(400,200);
        this.input1.position(400,150);

       this.button.position(400,350);
       
       this.button.mousePressed( ()=> {
       this.input1.hide();
       this.input.hide();
       this.button.hide();

        player.name=this.input.value();
        player.email=this.input1.value();
        playerCount=playerCount+1;
        player.index=playerCount;
        player.updateplayerCount(playerCount);
        player.updateemailCount(email)

        this.greeting.html("HELLO "+player.name);
        this. greeting.position(400,100);
        
        this.greeting1.html("YOUR EMAIL ID :"+player.email);
        this. greeting1.position(400,150);

        })

        this.button1.position(450,350);
        this.button1.mousePressed( ()=> {
        this.greeting.hide();
        this.greeting1.hide(); 
        this.button1.hide();
        
        this.greeting2.html("QUESTION 1 :. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this. greeting2.position(350,190);
        this.ans.position(545,305);

        player.index=playerCount;
        player.email=this.input1.value();
        player.name=this.input.value();
        player.ans=this.ans.value();
        player.update();
        
        
        })

         this.button4.position(450,450);
        this.button4.mousePressed( ()=> {
            player.ans=this.ans.value();
        player.update();
            this.ans.hide();
           
            this.greeting.hide();
            this.greeting1.hide();
            this.greeting2.hide();
            this.button.hide();
            this.button1.hide();
            this.button4.hide();
            this.input.hide();
            this.input1.hide();
        this.greeting3.html("THANK YOU");
        this. greeting3.position(400,250);
        playerCount=playerCount+1;
        player.index=playerCount;
        })
      
        
    }

    hide(){
        this.greeting.hide();
        this.greeting1.hide();
        this.greeting2.hide();
        this.button.hide();
        this.button1.hide();
        this.button4.hide();
        this.input.hide();
        this.input1.hide();
    }
}