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
        this.elementsOn = [];
        this.elementsOff = [];
        this.elementsMenuH = [];
        this.elementsMenuV = [];
        this.elementsText = [];
        this.elementsOption = [];
        this.elementsForm = [];
        this.elementsUser = [];
        this.elementsPost = [];
        this.loadElements();
        this.animate(this.typeAnimated);
        this.finish();
    };
    loadElements() {
        this.elementsOn = document.querySelectorAll('.pr-on');
        this.elementsOff = document.querySelectorAll('.pr-off');
        return this.elementsOn, this.elementsOff;
    };
    addClass(elements, classToAdd) {
        for (let i = 0; i < elements.length; i++)
            elements[i].classList.add(classToAdd);
    };
    replaceClass(elements, classToReplace, classReplace) {
        if (elements.length == 0) return;
        for (let i = 0; i < elements.length; i++)
            elements[i].classList.replace(classToReplace, classReplace);
    };
    finish() {
        this.replaceClass(this.elementsOn, 'pr-on', 'pr-off');
        this.replaceClass(this.elementsOff, 'pr-off', 'pr-on');
    };
    animate(type) {
        if (!this.animatedOn) return;
        this.addClass(this.elementsOn, type);
        this.addClass(this.elementsOff, type)
    };
    checkPrMenuH(){
        for ( let i =0 ; i< this.elementsPrMenuH; i++){
            this.elementsPrMenuH[i].innerhtml = 
            “<div class=‘pr-circle’></div>” +
            “<div class=‘pr-line-3’></div>”;
    };
    checkPrMenuV(){
        for ( let i =0 ; i< this.elementsPrMenuV; i++){
            this.elementsPrMenuV[i].innerhtml = 
            “<div class=‘pr-circle’></div>” +
            “<div class=‘pr-line-3’></div>”;
    };
    checkPrText(){
        for ( let i =0 ; i< this.elementsPrText; i++){
            this.elementsPrText[i].innerhtml = 
            “<div class=‘pr-circle’></div>” +
            “<div class=‘pr-line-3’></div>”;
    };
    checkPrOption(){
        for ( let i =0 ; i< this.elementsPrOption; i++){
            this.elementsPrOption[i].innerhtml = 
            “<div class=‘pr-circle’></div>” +
            “<div class=‘pr-line-3’></div>”;
    };
    checkPrForm(){
        for ( let i =0 ; i< this.elementsPrForm; i++){
            this.elementsPrForm[i].innerhtml = 
            “<div class=‘pr-circle’></div>” +
            “<div class=‘pr-line-3’></div>”;
    };
    checkPrUser(){
        for ( let i =0 ; i< this.elementsPrUser; i++){
            this.elementsPrUser[i].innerhtml = 
            “<div class=‘pr-circle’></div>” +
            “<div class=‘pr-line-3’></div>”;
    };
    checkPrPost(){
        for ( let i =0 ; i< this.elementsPrPost; i++){
            this.elementsPrPost[i].innerhtml = 
            “<div class=‘pr-line’></div>” +
            “<div class=‘pr-line’></div>”;
    };
}
};