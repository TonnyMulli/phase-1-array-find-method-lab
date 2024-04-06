function superbowlWin(records) {
    let winYear;
    records.find(function(record) {
      if (record.result === "W") {
        winYear = record.year;
        return true;
      }
    });
    return winYear;
  }