function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.find((person, idx) => person != completion[idx]);
}