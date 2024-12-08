function legendType(spec, scaleType) {
  switch (scaleType) {
    case 'linear':
      return 'line';
    case 'log':
      return 'log';
    default:
      return 'other';
  }
}
