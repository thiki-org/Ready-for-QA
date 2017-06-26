let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'thiki-ready for QA';
    window.document.title = title;
};

export default util;