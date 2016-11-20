function MyCtor(element, data) {
    this.data = data;
    this.element = element;
    element.value = data;
    element.addEventListener("change", this, false);
}

MyCtor.prototype.handleEvent = function (event) {
    switch (event.type) {
        case "change":
            this.change(this.element.value);
    }
};

MyCtor.prototype.change = function (value) {
    this.data = value;
    this.element.value = value;
};
MyCtor.prototype.display = function(){
  document.getElementById("boo").innerHTML = this.element.value; 
}
var obj = new MyCtor(document.getElementById("foo"), "initial");
obj.change(obj.element.value + 20);

// simulate some JS based changes.
var i = 0;
setInterval(function () {
    obj.change(obj.element.value + ++i);
    obj.display();
}, 10000); 
