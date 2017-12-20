// Clase constructora skeleton-preloader.
/**
 * - - SkeletonPreloader - -
 * Autor AythamiSalvador Rodriguez Valentin
 * Ruben ...
 * Rebeca ...
 * Daniel ...
 */
class SkeletonPreloader {
    typeAnimated = new String;
    animatedOn = new Boolean;
    elementsOn = new Array;
    elementsOff = new Array;
    constructor() {
        LoadElements();
        AddClass();
    };
    loadElements() {
        this.elementsOn = document.querySelectorAll('pr-on');
        this.elementsOff = document.querySelectorAll('pr-off');
    };
    replaceClass(classToReplace, classReplace) {
        this.elements.classList.replace(classToReplace, classReplace);
    };
    finish(elements) {
        replaceClass('pr-on', 'pr-off');
        replaceClass('pr-off', 'pr-on');
    };
};
