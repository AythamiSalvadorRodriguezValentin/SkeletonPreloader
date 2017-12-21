/**
 * - - SkeletonPreloader - -
 * - - Clase constructora skeleton-preloader - 
 * Autor AythamiSalvador Rodriguez Valentin
 * Ruben ...
 * Rebeca ...
 * Daniel ...
 */
class SkeletonPreloader {
    constructor() {
        this.animatedOn = true;
        this.typeAnimated = 'fade-in';
        this.elementsPrOn = [];
        this.elementsPrOff = [];
        this.elementsPrNavH = [];
        this.elementsPrNavV = [];
        this.elementsPrFeature = [];
        this.elementsPrUser = [];
        this.elementsPrPost = [];
        this.loadElements();
        this.checkPrMenuH();
        this.checkPrMenuV();
        this.checkPrFeature();
        this.checkPrUser();
        this.checkPrPost();
    };
    // Load elements of DOM:
    loadElements() {
        this.elementsPrOn = document.querySelectorAll('.pr-on');
        this.elementsPrOff = document.querySelectorAll('.pr-off');
        this.elementsPrNavH = document.querySelectorAll('.pr-nav-h');
        this.elementsPrNavV = document.querySelectorAll('.pr-nav-v');
        this.elementsPrFeature = document.querySelectorAll('.pr-feature');
        this.elementsPrUser = document.querySelectorAll('.pr-user');
        this.elementsPrPost = document.querySelectorAll('.pr-post');
        return this.elementsPrOn,
            this.elementsPrOff,
            this.elementsPrNavH,
            this.elementsPrNavV,
            this.elementsPrFeature,
            this.elementsPrUser,
            this.elementsPrPost;
    };
    // Fuction DOM add, replace or remove class:
    addClass(elements, classToAdd) {
        for (let i = 0; i < elements.length; i++)
            elements[i].classList.add(classToAdd);
    };
    replaceClass(elements, classToReplace, classReplace) {
        if (elements.length == 0) return;
        for (let i = 0; i < elements.length; i++)
            elements[i].classList.replace(classToReplace, classReplace);
    };
    removeClass(elements, classToRemove) {
        for (let i = 0; i < elements.length; i++)
            elements[i].classList.remove(classToRemove);
    }
    // Replace class:
    finish() {
        this.replaceClass(this.elementsPrOn, 'pr-on', 'pr-off');
        this.replaceClass(this.elementsPrOff, 'pr-off', 'pr-on');
    };
    // Add animated to class:
    animate(type) {
        if (!this.animatedOn) return;
        this.addClass(this.elementsPrOn, type);
        this.addClass(this.elementsPrOff, type)
    };
    checkPrMenuH() {
        if (this.elementsPrNavH.length == 0) return;
        this.elementsPrNavH.forEach(element => {
            element.innerHTML =
                "<div class='pr-item-h'>" +
                "<div class='pr-circle'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "</div>" +
                "<div class='pr-item-h'>" +
                "<div class='pr-circle'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "</div>" +
                "<div class='pr-item-h'>" +
                "<div class='pr-circle'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "</div>" +
                "<div class='pr-item-h'>" +
                "<div class='pr-circle'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "</div>";
        });
    };
    checkPrMenuV() {
        if (this.elementsPrNavV.length == 0) return;
        this.elementsPrNavV.forEach(element => {
            element.innerHTML =
                "<div class='pr-item-v'>" +
                "<div class='pr-circle'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "</div>" +
                "<div class='pr-item-v'>" +
                "<div class='pr-circle'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "</div>" +
                "<div class='pr-item-v'>" +
                "<div class='pr-circle'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "</div>" +
                "<div class='pr-item-v'>" +
                "<div class='pr-circle'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "</div>";
        });
    };
    checkPrFeature() {
        if (this.elementsPrFeature.length == 0) return;
        this.elementsPrFeature.forEach(element => {
            element.innerHTML =
                "<div class='pr-circle-container'>" +
                "<div class='pr-circle'>&nbsp</div>" +
                "</div>" +
                "<div class='pr-lines-container'>" +
                "<div class='pr-line'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "</div>";
        });
    };
    checkPrUser() {
        if (this.elementsPrUser.length == 0) return;
        this.elementsPrUser.forEach(element => {
            element.innerHTML =
                "<div class='pr-circle-container'>" +
                "<div class='pr-circle'>&nbsp</div>" +
                "</div>" +
                "<div class='pr-lines-container'>" +
                "<div class='pr-line'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "</div>";
        });
    };
    checkPrPost() {
        if (this.elementsPrPost.length == 0) return;
        this.elementsPrPost.forEach(element => {
            element.innerHTML =
                "<div class='pr-post-header'>" +
                "<div class='pr-circle-container'>" +
                "<div class='pr-circle'>&nbsp</div>" +
                "</div>" +
                "<div class='pr-lines-container'>" +
                "<div class='pr-line'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "</div>" +
                "</div>" +
                "<div class='pr-post-content'>" +
                "<div class='pr-line'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "<div class='pr-line'>&nbsp</div>" +
                "</div>";
        });
    };
};