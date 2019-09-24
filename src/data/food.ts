const url1 = "https://mixpitara.com/wp-content/uploads/2018/12/Green_Peas_Poori_mixpitara.jpg";
const url2 = "https://via.placeholder.com/300x300" ;

const  food_data = [
    {
      category: 'Breakfast',
      expanded: true,
      products: [
        { id: 0, name: 'Matar Poori', price: '80', isrc : url1 },
        { id: 1, name: 'Poori Bhaji', price: '85', isrc : url2 },
        { id: 2, name: 'Chole Bhature', price: '90', isrc : url2 },
        { id: 3, name: 'Vada Pav', price: '50', isrc : url2 }
      ]
    },
    {
      category: 'Chaat',
      products: [
        { id: 4, name: 'Samosa Chaat ', price: '80' , isrc : url2},
        { id: 5, name: 'Aloo Tikki', price: '90', isrc : url2 }
      ]
    },
    {
      category: 'Desserts',
      products: [
        { id: 6, name: 'Gulab Jamun', price: '30', isrc : url2 },
        { id: 7, name: 'Moong Dal Halwa', price: '55' , isrc : url2},
        { id: 8, name: 'RasMalai', price: '49', isrc : url2 },
        { id: 9, name: 'Rabdi', price: '79' , isrc : url2},
        { id: 10, name: 'Malpua', price: '49' , isrc : url2}
      ]
    }
  ];

export default food_data;
 
 
