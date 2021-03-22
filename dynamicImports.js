import('./Users.js').then(({ default: User, userDetail }) => {
  //This will be the code that depends on the module...
});


// or


const { default: User, userDetail } = await import('./Users.js');


// after clicked


addToCartBtn.addEventListener('click', async () => {
  const { showCart, checkout } = await import('./cart.js');
});


// only if needed

const userLang = window.navigator.userLanguage
|| window.navigator.language
const { localStrings } = await import(`strings.${userLang}.js`);
