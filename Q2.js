// Question 2:
// There are n people in a line waiting to purchase tickets, with the 0th person at the front and the (n - 1)th person at the back. 
// You are given a 0-indexed integer array of tickets of length n, where tickets[I] represents the number of tickets that the ith person wishes to purchase. 
// Each person purchases a ticket in exactly one second. A person can only purchase one ticket at a time and must return to the end of the line (which happens instantly) to purchase additional tickets. If a person has no more tickets to buy, he or she will leave the line. 
// Return the time spent for the individual at position k (0-indexed) to finish buying tickets. 

// EXAMPLE: 
// Input: tickets = [2,3,2], k = 2
// Output: 6

// tickets = [2, 3, 2], k = 2
// 1st - Person at index 0 buys one of their two tickets. Time increments by 1
//     [1,3,2]
// 2nd - Person at index 1 buys one ticket of their three tickets. Time increments by 1
//     [1, 2, 2]
// 3rd - Person at index 2 buys one ticket of their two tickets. Time increments by 1
//     [1, 2, 1]
// 4th - Person at index 0 buys second ticket and finishes. Time increments by 1
//     [0, 2, 1]
// 5th - Person at index 1 buys second ticket. Time increments by 1
//     [0, 1, 1]
// 6th - Person at index 2 buys second ticket and finishes. Time increments by 1
//     [0, 1, 0]
// In total is 6 seconds.

function timeRequiredToBuy(tickets, k) {
    let time = 0;
    let n = tickets.length;

    while(tickets[k] > 0) {
        for (let i = 0; i < n; i++) {
            if (tickets[i] > 0) {
                tickets[i]--;
                tickets++;
                if (i === k && tickets[k] === 0) {
                    return time;
                }
            }
        }
    }
    return time;
}

console.log(timeRequiredToBuy(tickets, k)); // Output is 6