class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.email=null;
        this.ans=null;
    }

    getplayerCount(){
        var toread = database.ref('playerCount');
        toread.on("value",function (data) {
            playerCount = data.val();
            email = data.val();
            ans = data.val();
            ans1 = data.val();
        })
    }

    updateplayerCount(Count){
        database.ref('/').update({'playerCount' : Count});
    }

    updateemailCount(email){
        database.ref('/').update({'email' : email});
    }

    updatans(ans){
        database.ref('/').update({'answer' :ans});
    }

    updatans1(ans1){
        database.ref('/').update({'ANSWER' :ans1});
    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name ,  
            email : this.email,
            ans: this.ans
        })
    }

    static getplayerInfo(){
        database.ref('players').on("value",(data)=>{
            allPlayers=data.val();
        })
    }














}

