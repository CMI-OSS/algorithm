function solution(sizes) {
  var answer = 0;
  const parsingSize = [];

  for (let i = 0; i < sizes.length; i++) {
    const size = sizes[i];

    if (size[0] > size[1]) {
      parsingSize[i] = [size[1], size[0]];
    } else {
      parsingSize[i] = size;
    }
  }

  const leftSizes = parsingSize.map((size) => size[0]).sort((a, b) => a - b);
  const rightSizes = parsingSize.map((size) => size[1]).sort((a, b) => a - b);

  answer = leftSizes[leftSizes.length - 1] * rightSizes[rightSizes.length - 1];

  return answer;
}
