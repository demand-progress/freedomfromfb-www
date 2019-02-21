

var sampleNode = {
	   id: "A",
	   left: { 
	   	id: "B",
			left: {
				id: "C"
			},
			right: {
	        	id: "D"
			}
	   },
	   right: {
	   	id: "E",
			left: {
				id: "F"
			},
			right: {
				id: "G"
			}
		}
}

function printTree(node) {
	   console.log(node.id);
}

var sampleNode2 = {
	id: "G",
	left: { 
		id: "C",
		left: {
			id: "A"
		},
		right: {
			  id: "B"
		}
	},
	right: {
		id: "F",
		left: {
			id: "D"
		},
		right: {
			id: "E"
		}
	}
}