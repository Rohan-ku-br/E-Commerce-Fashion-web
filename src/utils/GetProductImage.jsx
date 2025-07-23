const GetProductImage = (productName) => {
  const name = productName.toLowerCase();
  
  // Men's clothing
  if (name.includes("t-shirt") || name.includes("tee")) {
    return "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500";
  }
  if (name.includes("jogger") || name.includes("pants")) {
    return "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=500";
  }
  
  // Women's clothing
  if (name.includes("dress")) {
    return "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=500";
  }
  if (name.includes("handbag") || name.includes("purse")) {
    return "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&q=80&w=500";
  }
  
  // Kids' items
  if (name.includes("sneaker") || name.includes("shoe")) {
    return "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=500";
  }
  if (name.includes("pajama") || name.includes("pyjama")) {
    return "https://images.unsplash.com/photo-1595034313282-a31ff30de0bf?auto=format&fit=crop&q=80&w=500";
  }
  
  // Beauty products
  if (name.includes("face") || name.includes("cream")) {
    return "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=500";
  }
  if (name.includes("hair") || name.includes("oil")) {
    return "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=500";
  }
  
  // Kitchen and home
  if (name.includes("kitchen") || name.includes("cookware")) {
    return "https://images.unsplash.com/photo-1593784991095-a205069533cd?auto=format&fit=crop&q=80&w=500";
  }
  if (name.includes("bamboo") || name.includes("utensil")) {
    return "https://images.unsplash.com/photo-1584346133934-a3afd2a33c3c?auto=format&fit=crop&q=80&w=500";
  }
  
  // Water bottles and containers
  if (name.includes("bottle") || name.includes("container")) {
    return "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=500";
  }
  
  // Bags and totes
  if (name.includes("tote") || name.includes("bag")) {
    return "https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&q=80&w=500";
  }
  
  // Default image for other products
  return "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=500";
};

// Function to get multiple images for product details
const GetProductDetailImages = (productName) => {
  const mainImage = GetProductImage(productName);
  const name = productName.toLowerCase();
  
  let additionalImages = [];
  
  // Add category-specific additional images
  if (name.includes("t-shirt") || name.includes("dress") || name.includes("jogger")) {
    additionalImages = [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500"
    ];
  } else if (name.includes("bottle") || name.includes("container")) {
    additionalImages = [
      "https://images.unsplash.com/photo-1578661138893-67eb7a513224?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1589365278144-c9e705f843cd?auto=format&fit=crop&q=80&w=500"
    ];
  } else if (name.includes("kitchen") || name.includes("cookware")) {
    additionalImages = [
      "https://images.unsplash.com/photo-1593784991095-a205069533cd?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1584346133934-a3afd2a33c3c?auto=format&fit=crop&q=80&w=500"
    ];
  }
  
  return [mainImage, ...additionalImages];
};

export { GetProductImage, GetProductDetailImages }; 