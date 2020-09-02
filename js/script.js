const cats = [
	{
		name: "Blob",
		age: 10,
	},
	{
		name: "Harold",
	},
	{
		name: "Blurt",
		age: 21,
	},
];

// Question 1

const cat = {
	complain: function () {
		console.log("Meow!");
	},
};

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = `Updated heading`;

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList = ["subheading"];

// Question 5

const paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function listFunction(list) {
	for (i = 0; i < list.length; i++) {
		if (list[i].name) {
			console.log(`The ${i + 1}. cats name is ${list[i].name}.`);
		} else {
			console.log(`The ${i + 1}. cats name is unknown.`);
		}
		if (list[i].age) {
			console.log(`The ${i + 1}. cat is ${list[i].age} years.`);
		} else {
			console.log(`The ${i + 1}. cats age is unknown.`);
		}
	}
}

listFunction(cats);

// Question 8

function createCats(cats) {
	catsHtml = "";
	for (i = 0; i < cats.length; i++) {
		let nameHtml = `<h5>${cats[i].name}</h5>`;
		let ageHtml = "";
		if (cats[i].age) {
			ageHtml = `<p>${cats[i].age}</p>`;
		} else {
			ageHtml = `<p>Age unknown</p>`;
		}
		catsHtml += `<div>${nameHtml}${ageHtml}</div>`;
	}

	return catsHtml;
}

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = createCats(cats);
