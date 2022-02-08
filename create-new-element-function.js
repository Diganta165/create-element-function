function elementMaker(name, className, id) {
    try {
        let element = document.createElement(name);
        className && (element.className = className.join(" "));
        id && (element.id = id);
        return element;
    } catch (err) {
        console.log(err.message);
    };
};