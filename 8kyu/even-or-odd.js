//

function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//OR

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
