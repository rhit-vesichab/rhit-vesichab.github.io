// Namespace
var avPortfolio = avPortfolio || {};

// Controller
avPortfolio.InteractionController = class {
    constructor() {
        this._data = new avPortfolio.InteractionData();
        this._setupMenuInteractions();
        this._setupAnimojiReactions();
    }

    _setupMenuInteractions() {
        const navMenu = document.querySelector("#navMenu");
        document.querySelector("#openMenuButton").addEventListener("click", (event) => {
            navMenu.style.setProperty("left", "0px");
        });

        document.querySelector("#closeMenuButton").addEventListener("click", (event) => {
            navMenu.style.setProperty("left", "-256px");
        });
    }

    _setupAnimojiReactions() {
        const reactionButtons = document.querySelectorAll(".reactive-button");
        reactionButtons.forEach((button) => {
            button.addEventListener("mouseover", (event) => {
                const reactionStyle = button.dataset.reactionStyle;
                this._reactWith(reactionStyle);
            });
            button.addEventListener("mouseout", (event) => {
                this._endReaction();
            });
        });
    }

    _reactWith(reactionName) {
        const reactiveIcon = document.querySelector("#headerImage");
        reactiveIcon.src = this._data.getReactionImage(reactionName);        
    }

    _endReaction() {
        const reactiveIcon = document.querySelector("#headerImage");
        reactiveIcon.src = "../Support/Images/favicon.png";        
    }
}

avPortfolio.InteractionData = class {
    constructor() {

    }

    getReactionImage(reactionName) {
        switch (reactionName) {
            case "portfolio":
                return "../Support/Images/portfolio.png";
            case "resume":
                return "../Support/Images/resume.png";
            case "about":
                return "../Support/Images/about.png";
            case "download_resume":
                return "../Support/Images/download_resume.png";
            case "contact":
                return "../Support/Images/contact.png";
        }
    }
}

// Controller init
avPortfolio.main = function() {
    console.log("Ready");

    new avPortfolio.InteractionController();
}

avPortfolio.main();
