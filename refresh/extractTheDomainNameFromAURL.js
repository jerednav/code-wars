Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

Parameters
  - URL as a string
Returns
  - Given domain name parsed out with just the domain name
Example
  - domainName("http://github.com/carbonfive/raygun") == "github" 
  - domainName("http://www.zombie-bites.com") == "zombie-bites"
  - domainName("https://www.cnet.com") == "cnet"
Pseudocode
  - replace http://, https://, www. with blank to remove it from the start
  - split github.com with split('.') by using . as a delimiter to split the words
  - .shift remove first item in array and returns it (chanes entire array.)



function domainName(url){
  return url.replace('http://', '').replace('www.', '').replace('https://', '').split('.').shift()
}
