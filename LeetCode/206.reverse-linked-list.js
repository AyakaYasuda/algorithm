/*
Given the head of a singly linked list, reverse the list, and return the reversed list.


Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

*/

// 1 -> 2 -> 3 -> 4 -> 5
// f    s    t

// 1 <- 2 -> 3 -> 4 -> 5
//      f    s    t

// 1 <- 2 <- 3 -> 4 -> 5
//           f    s    t

// 1 <- 2 <- 3 <- 4 -> 5 -> null
//                f    s     t

// 1 <- 2 <- 3 <- 4 <- 5 -> null
//                     f     s

// null <- 1 <- 2 <- 3 <- 4 <- 5


const reverseList = (head) => {
  if (!head) {
    return head;
  }

  let first = head;
  let second = first.next;

  while (second) {
    const temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }

  head.next = null;
  head = first;

  return head;
};
