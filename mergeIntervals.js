const Interval = function(start, end) {
  this.start = start;
  this.end = end;
};

const mergeIntervals = (intervals) => {
  const sorted = intervals.sort((x, y) => { return x.start - y.start; });
  return sorted.reduce((accummulator, current) => {
    const length = accummulator.length;
    const lastInterval = accummulator[length - 1];
    if ( lastInterval.end < current.start ) {
      accummulator.push(current);
    } else {
      const popped = accummulator.pop();
      accummulator.push(new Interval(popped.start, Math.max(popped.end, current.end)));
    }
    return accummulator;
  }, [sorted[0]]);
};
// const intervals = [ new Interval(3, 7), new Interval(1, 5), new Interval(6, 8), new Interval(7, 10), new Interval(7, 15)];
// console.log(mergeIntervals(intervals));