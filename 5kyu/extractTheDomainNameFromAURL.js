// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"


function domainName(url){
  return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.').shift()
}

//replace all possibilities (3), with blank
//split the new string from the period
//new array is ['cnet','.com'], shift then removes last element of array, so its left with cnet
