  //* TYPE IN TERMINAL FOR: */
      // checking if you're in the root directory of project ||  sqlite3 --version
      // to create election database ||  sqlite3 db/election.db
      // to quit SQLITE ||  .quit
      // to run SQLITE ||  sqlite3
      // to open data base ||  .open db/election.db
      // to see tables of a database || .schema
      // to print column headers ||  .headers on  ||  .mode column
  //* INSTALL PACKAGES */
      // Initilizes Node.js ||  npm init --y
      // Creates .gitignore and adds node_modules insided ||  echo "node_modules/" > .gitignore
      // Installs express and sqlite3 packages ||  npm install express sqlite3
      // Installs jest ||  npm install jest --save-dev
// utility to check if an object has the required properties
// e.g., inputCheck(object, 'prop1', 'prop2', 'etc')

module.exports = function(obj, ...props) {
  const errors = [];

  props.forEach((prop) => {
    // if property is blank or doesn't exist, add to errors array
    if (obj[prop] === undefined || obj[prop] === '') {
      errors.push(`No ${prop} specified.`);
    }
  });

  if (errors.length) {
    return {
      error: errors.join(' ')
    };
  }
  
  return null;
};