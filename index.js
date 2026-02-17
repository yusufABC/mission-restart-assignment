const url="https://fakestoreapi.com/products"
const categoryUrl="https://fakestoreapi.com/products/categories"

const loadAllProducts=()=>{
fetch(url)
.then(res=>res.json())
.then(data=>showAllProducts(data)
)

}
const loadAllCategories=()=>{
fetch(categoryUrl)
.then(res=>res.json())
.then(data=>{
    showAllCategory(data)

     const allBtn = document.getElementById('all-btn');
            if (allBtn) handleCategoryActive(allBtn);

}
)

}



const showAllCategory=(data)=>{
    console.log(data);

   const categoryContainer= document.getElementById('dynamic-categories')
categoryContainer.innerHTML=''

 data.forEach(category => {
        const btn = document.createElement('button');

        btn.className = "btn rounded-2xl capitalize";
        btn.innerText = category;

         btn.onclick = () => {
            handleCategoryActive(btn)
            loadCategoryProducts(category)};
        
        categoryContainer.appendChild(btn);
    });
    
}

const loadCategoryProducts=async(category)=>{
const url=`https://fakestoreapi.com/products/category/${category}`
const res=await fetch(url)
const data=await res.json()
showAllProducts(data)



}




const loadCardModal=async(id)=>{
const url=`https://fakestoreapi.com/products/${id}`
const res=await fetch(url)
const data=await res.json()
displayCardDetails(data)

}
const displayCardDetails=(word)=>{
    console.log(word);
    
const detailsContainer=document.getElementById("details-container")
detailsContainer.innerHTML=`
 <div class="flex flex-col gap-5">
          
            <!-- Content Section -->
            <div class="space-y-3">
                <span class="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    ${word.category}
                </span>

                <h2 class="text-2xl font-bold text-slate-800 leading-tight">
                    ${word.title}
                </h2>

                <!-- Rating -->
                <div class="flex items-center gap-2 text-sm">
                    <div class="flex items-center text-yellow-400">
                        <i class="fa-solid fa-star"></i>
                        <span class="ml-1 text-slate-700 font-bold">${word.rating.rate}</span>
                    </div>
                    <span class="text-slate-400">|</span>
                    <span class="text-slate-500 font-medium">${word.rating.count} Reviews</span>
                </div>

                <p class="text-slate-600 text-sm leading-relaxed">
                    ${word.description}
                </p>

                <div class="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
                    <div>
                        <p class="text-slate-400 text-xs font-bold uppercase">Price</p>
                        <p class="text-3xl font-black text-slate-900">$${word.price}</p>
                    </div>
                    <button class="bg-[#5842ff] hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-100 flex items-center gap-2">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    

`
document.getElementById('word_modal').showModal()

}

const showAllProducts=(data)=>{
// console.log(data);
/**
 * category
"men's clothing"
description
"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
id
2
image
"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
price
22.3
rating
count
259
rate
4.1
[[Prototype]]
Object
title
"Mens Casual Premium Slim Fit T-Shirts "
 */
const productCard=document.getElementById('product-card')
productCard.innerHTML=''

data.forEach(card=>{
const cardHtml=`
        <!-- Main Card Container -->
<div class="max-w-[280px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
  
  <!-- Image Area (Light background) -->
  <div class="bg-slate-100 aspect-square flex items-center justify-center p-8">
    <img 
      src="${card.image}" 
      alt="Product" 
      class="max-h-full object-contain mix-blend-multiply"
    />
  </div>

  <!-- Card Body -->
  <div class="p-4">
    
    <!-- Top Row: Category & Rating -->
    <div class="flex items-center justify-between mb-3">
      <span class="bg-indigo-50 text-indigo-600 text-xs font-bold p-2 rounded-full uppercase tracking-wider">
    ${card.category}
      </span>
      <div class="flex items-center gap-1 text-gray-400 text-xs">
        <i class="fa-solid fa-star text-yellow-400"></i>
        <span>${card.rating.rate}(${card.rating.count})</span>
      </div>
    </div>

    <!-- Title & Price -->
    <h3 class="text-slate-800 font-semibold text-base truncate mb-1" title="Fjallraven - Foldsack No. 1...">
     ${card.title}
    </h3>
    <p class="text-slate-900 font-extrabold text-xl mb-4">
      $${card.price}
    </p>

    <!-- Action Buttons -->
    <div class="flex gap-2">
      <!-- Details Button -->
      <button onclick="loadCardModal(${card.id})" class="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-xl text-slate-700 font-semibold text-sm hover:bg-gray-50 transition-colors">
        <i class="fa-regular fa-eye text-xs"></i>
        Details
      </button>
      
      <!-- Add Button -->
      <button class="flex-1 flex items-center justify-center gap-2 bg-[#5842ff] py-2.5 rounded-xl text-white font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
        <i class="fa-solid fa-cart-shopping text-xs"></i>
        Add
      </button>
    </div>

  </div>
</div>

`
productCard.innerHTML+=cardHtml

})


}


const handleNavbarActive = () => {
    const navLinks = document.querySelectorAll('.navbar-center a, .menu-sm a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        link.classList.remove('bg-blue-600', 'text-white', 'rounded-lg');

        if ((currentPath === "/" || currentPath.endsWith("index.html")) && linkPath === "/") {
            link.classList.add('bg-blue-600', 'text-white', 'rounded-lg', 'px-4', 'py-2');
        } 
        else if (currentPath.endsWith(linkPath) && linkPath !== "/") {
            link.classList.add('bg-blue-600', 'text-white', 'rounded-lg', 'px-4', 'py-2');
        }
    });
}



const handleCategoryActive=(clicked)=>{
    const allBtns=document.querySelectorAll('#category-container button')
     allBtns.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
    });

      clicked.classList.add('bg-blue-600', 'text-white');
}

// load 3 popular products 
loadPopularPorducts=async()=>{
const url='https://fakestoreapi.com/products'
const res=await fetch(url)
const data=await res.json()

// sort popular usig raitng count

const sortPopular=data.sort((a,b)=>{
    b.rating.count-a.rating.count
} )

const topProduct=sortPopular.slice(0,6)
// console.log(topProduct);

displayPopularProducts(topProduct);

}

const displayPopularProducts=(products)=>{
    const popularProductContainer=document.getElementById('popular_products')
products.forEach(card=>{
    popularProductContainer.innerHTML+=`
        <!-- Main Card Container -->
<div class="max-w-[280px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
  
  <!-- Image Area (Light background) -->
  <div class="bg-slate-100 aspect-square flex items-center justify-center p-8">
    <img 
      src="${card.image}" 
      alt="Product" 
      class="max-h-full object-contain mix-blend-multiply"
    />
  </div>

  <!-- Card Body -->
  <div class="p-4">
    
    <!-- Top Row: Category & Rating -->
    <div class="flex items-center justify-between mb-3">
      <span class="bg-indigo-50 text-indigo-600 text-xs font-bold p-2 rounded-full uppercase tracking-wider">
    ${card.category}
      </span>
      <div class="flex items-center gap-1 text-gray-400 text-xs">
        <i class="fa-solid fa-star text-yellow-400"></i>
        <span>${card.rating.rate}(${card.rating.count})</span>
      </div>
    </div>

    <!-- Title & Price -->
    <h3 class="text-slate-800 font-semibold text-base truncate mb-1" title="Fjallraven - Foldsack No. 1...">
     ${card.title}
    </h3>
    <p class="text-slate-900 font-extrabold text-xl mb-4">
      $${card.price}
    </p>

    <!-- Action Buttons -->
    <div class="flex gap-2">
      <!-- Details Button -->
      <button onclick="loadCardModal(${card.id})" class="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-xl text-slate-700 font-semibold text-sm hover:bg-gray-50 transition-colors">
        <i class="fa-regular fa-eye text-xs"></i>
        Details
      </button>
      
      <!-- Add Button -->
      <button class="flex-1 flex items-center justify-center gap-2 bg-[#5842ff] py-2.5 rounded-xl text-white font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
        <i class="fa-solid fa-cart-shopping text-xs"></i>
        Add
      </button>
    </div>

  </div>
</div>

`

})
}

handleNavbarActive();

loadPopularPorducts()

loadAllProducts()
loadAllCategories()
loadCardModal()