function generateWinningCombinations() {
    const winningCombinations = [];
  
     //Horizontal combinations
   for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 20; j += 7) {
        const combination = [];
        for (let k = 0; k < 4; k++) {
          combination.push(i + j + k);
        }
        winningCombinations.push(combination);
      }
    }
  
    // Vertical combinations
    for (let i = 0; i <= 20; i += 7) {
      for (let j = 0; j <= 6; j++) {
        const combination = [];
        for (let k = 0; k < 4; k++) {
          combination.push(i + j + k * 7);
        }
        winningCombinations.push(combination);
      }
    }
  
    // Diagonal combinations
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 20; j += 7) {
        const diagonalUpCombination = [];
        const diagonalDownCombination = [];
        for (let k = 0; k < 4; k++) {
          diagonalUpCombination.push(i + j + k + k * 6);
          diagonalDownCombination.push(i + j + k + k * 8);
        }
        winningCombinations.push(diagonalUpCombination);
        winningCombinations.push(diagonalDownCombination);
      }
    }
  
    return winningCombinations;
  }
  
  const winningCombinations = generateWinningCombinations();