// Clase constructora skeleton-preloader.
/**
 * - - SkeletonPreloader - -
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
        this.loadElements();
        this.finish();
    };
    loadElements() {
        this.elementsOn = document.querySelectorAll('.pr-on');
        this.elementsOff = document.querySelectorAll('.pr-off');
        console.log(this.elementsOn, this.elementsOff);
        return this.elementsOn, this.elementsOff;
    };
    addClass(elements, classToAdd) {
        for (let i = 0; i < elements.length; i++)
            elements[i].classList.add(classToAdd);
    };
    replaceClass(elements, classToReplace, classReplace) {
        console.log(elements);
        if (elements.length == 0) return;
        for (let i = 0; i < elements.length; i++)
            elements[i].classList.replace(classToReplace, classReplace);
    };
    finish() {
        this.replaceClass(this.elementsOn, 'pr-on', 'pr-off');
        this.replaceClass(this.elementsOff, 'pr-off', 'pr-on');
    };
};