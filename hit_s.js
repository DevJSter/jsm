// Sample web graph represented as an adjacency matrix
const adjacencyMatrix = [
 [0, 0, 1, 1, 0, 0, 0, 0],
 [0, 0, 1, 0, 1, 1, 0, 0],
 [1, 0, 0, 1, 1, 1, 1, 0],
 [0, 0, 1, 0, 0, 0, 1, 0],
 [0, 0, 0, 1, 0, 0, 1, 1],
 [0, 0, 0, 0, 0, 0, 0, 0],
 [1, 0, 0, 0, 0, 0, 0, 0],
 [1, 0, 0, 0, 0, 0, 0, 0]
];

function calculateHits(adjacencyMatrix, maxIterations = 50, tolerance = 0.0001) {
 const numPages = adjacencyMatrix.length;
 let hubs = Array(numPages).fill(1);
 let authorities = Array(numPages).fill(1);

 for (let iteration = 0; iteration < maxIterations; iteration++) {
   let newAuthorities = Array(numPages).fill(0);
   let newHubs = Array(numPages).fill(0);
   let norm = 0;

   // Update authorities
   for (let i = 0; i < numPages; i++) {
     for (let j = 0; j < numPages; j++) {
       if (adjacencyMatrix[j][i] === 1) {
         newAuthorities[i] += hubs[j];
       }
     }
     norm += newAuthorities[i] ** 2;
   }

   norm = Math.sqrt(norm);

   // Normalize authorities
   for (let i = 0; i < numPages; i++) {
     newAuthorities[i] /= norm;
   }

   // Update hubs
   for (let i = 0; i < numPages; i++) {
     for (let j = 0; j < numPages; j++) {
       if (adjacencyMatrix[i][j] === 1) {
         newHubs[i] += newAuthorities[j];
       }
     }
     norm += newHubs[i] ** 2;
   }

   norm = Math.sqrt(norm);

   // Normalize hubs
   for (let i = 0; i < numPages; i++) {
     newHubs[i] /= norm;
   }

   // Check for convergence
   let authorityDiff = 0;
   let hubDiff = 0;

   for (let i = 0; i < numPages; i++) {
     authorityDiff += Math.abs(newAuthorities[i] - authorities[i]);
     hubDiff += Math.abs(newHubs[i] - hubs[i]);
   }

   if (authorityDiff < tolerance && hubDiff < tolerance) {
     authorities = newAuthorities;
     hubs = newHubs;
     break;
   }

   authorities = newAuthorities;
   hubs = newHubs;
 }

 return { hubs, authorities };
}

// Example usage
const { hubs, authorities } = calculateHits(adjacencyMatrix, 50);
console.log("Hub Scores: ", hubs);
console.log("Authority Scores: ", authorities);
