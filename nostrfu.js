const utc = isUTCScale || isUTCTimeUnit(timeUnit);

return `${utc ? 'utc' : 'time'}Format(${field}, ${expr})`;
