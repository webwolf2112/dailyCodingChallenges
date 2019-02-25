// Linked List vs Array

// ***Do not try to sort (merge sort or any thing) a Linked List during an interview. Just don’t!

// Array: 
// Fixed Size
// Innefecvient INsertas and Deletions
// Random access to indexing
// May result in much memory waste
// sequential access is faster [Reason: elements in contigous memory locations]

// Linked List: 
// Dynamic Size
// Effecent insertion and Deletions
// No random access
// No wasted memeory
// Slow sequential access [Reason:Elements not in contigous memory]
// When to use Linked Lists?
// 	when We need to do a lot of inserts and removals
// 	when Searching is not that important
// 	for large data
// 	splitting and joining lists are very effective



function Node(value) {
  this.value = value;
  this.next = undefined;
}

function Linkedlist() {
	return {
		head: null,
		length: 0,
		size: function() {
			return this.length;
		},
		add: function(item) {
			if(!item) return;

			var node = new Node(item);

			if(this.head) {
				node.next = this.head;
			}

			this.head = node;
			length ++;
		},
		delete: function(value) {
			let curr = this.head;

			if(this.head.value === value) {
				this.head = this.head.next;
				return;
			}

			while (curr) {
				if (curr.next) {
					next = curr.next;
					this.length --;
					break;
				}
			}
			curr = curr.next;
		},
		search: function(value) {
	      var curr = this.head;
	      var found = undefined;

	      while (curr) {
	        if (curr.value === value) {
	          found = curr;
	          break;
	        }

	        curr = curr.next;
	      }

	      return found;
	    },
	    print: function() {
	      var result = [];

	      var curr = head;
	      while (curr) {
	        result.push(curr.value);

	        curr = curr.next;
	      }

	      return result;
	    }
	}
}