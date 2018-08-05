var globalString_1 = "I'm global";

(function () {
    alert(2 + 2);
    alert(globalString_1);
})();

var MODULE01 = (function () {
	var my = {};
	var privateVariable = 1;

	function privateMethod() {
		// ...
	}

	my.test_1 = function () {
		alert("test_1 executed");
	};

	return my;
})();

//order needed
MODULE01 = (function (mod) {
	mod.newTest = function () {
		alert("newTest executed");
	};

	return mod;
}(MODULE01));

//can be run in parrallel
var MODULE01 = (function (my) {
	mod.newTest_2 = function () {
		alert("newTest_2 executed");
	};

	return my;
}(MODULE01 || {}));

var MODULE02 = {

	test_2 : function () {
		alert("test_2 executed");
	}
};

function showAlert(data) {
    alert(data);
}

function showAllGlobals() {
    alert(globalString_1);
}

function copyInput() {
    var inputEl = $("#mainInput");
    var outputEl = $("#mainLabel");

    outputEl.text(inputEl.val());
}

function noLockIn() {
    var elems = document.getElementsByTagName('button');
    for (var i = 0; i < elems.length; i++) {

        elems[i].addEventListener('click', function (e) {

            e.preventDefault();

            alert('No lock in: ' + i);

        }, 'false');
    }
}

function lockIn() {
    var elems = document.getElementsByTagName('button');
    for (var i = 0; i < elems.length; i++) {
        (function (lockedInIndex) {
            elems[i].addEventListener('click', function (e) {
                e.preventDefault();
                alert('I am link #' + lockedInIndex);
            }, 'false');
        })(i); //important - i passed
    }
}