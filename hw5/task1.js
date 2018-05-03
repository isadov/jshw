var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 11,
    'Anton': 99
  };
  
  function getName(obj) {
    var maxName = "";
    var max = 0;
    for (name in obj) {
      if (max < obj[name]) {
        max = obj[name];
        maxName = name;
      }
    }
    return maxName;
  }
  
  console.log(getName(tasksCompleted));