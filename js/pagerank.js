function calculatePageRank(graph, dampingFactor = 0.85, maxIterations = 100, tolerance = 1e-6) {
 const N = graph.length;
 let ranks = Array(N).fill(1 / N);

 for (let iteration = 0; iteration < maxIterations; iteration++) {
     let newRanks = Array(N).fill(0);
     let delta = 0;

     for (let i = 0; i < N; i++) {
         for (let j = 0; j < N; j++) {
             if (graph[j][i] === 1) {
                 newRanks[i] += ranks[j] / graph[j].reduce((a, b) => a + b, 0);
             }
         }
         newRanks[i] = (1 - dampingFactor) / N + dampingFactor * newRanks[i];
         delta += Math.abs(newRanks[i] - ranks[i]);
     }

     ranks = newRanks;

     if (delta < tolerance) {
         break;
     }
 }

 return ranks;
}

function calculateAuthorityAndHubScores(graph, dampingFactor = 0.85) {
 const N = graph.length;
 let authorityScores = Array(N).fill(1);
 let hubScores = Array(N).fill(1);

 for (let iteration = 0; iteration < 100; iteration++) {
     let newAuthorityScores = Array(N).fill(0);
     let newHubScores = Array(N).fill(0);

     for (let i = 0; i < N; i++) {
         for (let j = 0; j < N; j++) {
             if (graph[i][j] === 1) {
                 newAuthorityScores[i] += hubScores[j];
                 newHubScores[j] += authorityScores[i];
             }
         }
     }

     let authorityNorm = Math.sqrt(newAuthorityScores.reduce((sum, val) => sum + val * val, 0));
     let hubNorm = Math.sqrt(newHubScores.reduce((sum, val) => sum + val * val, 0));

     authorityScores = newAuthorityScores.map(score => score / authorityNorm);
     hubScores = newHubScores.map(score => score / hubNorm);
 }

 return { authorityScores, hubScores };
}

function calculateSemiRank(graph, authorityScores, hubScores, dampingFactor = 0.85, maxIterations = 100, tolerance = 1e-6) {
 const N = graph.length;
 let semiRank = Array(N).fill(1 / N);

 for (let iteration = 0; iteration < maxIterations; iteration++) {
     let newSemiRank = Array(N).fill(0);
     let delta = 0;

     for (let i = 0; i < N; i++) {
         for (let j = 0; j < N; j++) {
             if (graph[j][i] === 1) {
                 newSemiRank[i] += authorityScores[j] * hubScores[j] / graph[j].reduce((a, b) => a + b, 0);
             }
         }
         newSemiRank[i] = (1 - dampingFactor) / N + dampingFactor * newSemiRank[i];
         delta += Math.abs(newSemiRank[i] - semiRank[i]);
     }

     semiRank = newSemiRank;

     if (delta < tolerance) {
         break;
     }
 }

 return semiRank;
}

// Example usage
const graph = [
 [0, 1, 1,0,0,1],
 [1, 0, 0,1,1,1],
 [1, 0, 0,1,0,1],
 [0, 0, 1,1,0,1],
 [1, 0, 1,1,0,1],
 [1, 1, 0,1,0,1]
];

const dampingFactor = 0.85;

const pageRank = calculatePageRank(graph, dampingFactor);
const { authorityScores, hubScores } = calculateAuthorityAndHubScores(graph, dampingFactor);
const semiRank = calculateSemiRank(graph, authorityScores, hubScores, dampingFactor);

console.log("PageRank:", pageRank);
console.log("Authority Scores:", authorityScores);
console.log("Hub Scores:", hubScores);
console.log("Semi-Rank:", semiRank);


// output
PageRank: [
    0.16432150189345768,
    0.13017445808582362,
    0.14771267493261506,
    0.22928577878554643,
    0.05266209373888651,
    0.27584349256367063
  ]
  Authority Scores: [
    0.2741756637015799,
    0.43537230181586134,
    0.4073677216268835,
    0.3650607357710792,
    0.47931674330782115,
    0.4542205658102033
  ]
  Hub Scores: [
    0.45050011797601924,
    0.18473612274006745,
    0.2836878642472987,
    0.5430869576088765,
    0.1104192851736605,
    0.612623491448245
  ]
  Semi-Rank: [
    0.1452129565060628,
    0.1191278129833295,
    0.12741657148555274,
    0.20138654506690196,
    0.042091160584499646,
    0.23638279290595451
  ]
  