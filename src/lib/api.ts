export type Response<T = any> = {
	[key: string]: {
		error?: Error;
		data?: T;
	};
};

import bathtubs from "$lib/images/background/bathtubs.jpg";
import tubshowers from "$lib/images/background/tub-showers.jpg";
import showers from "$lib/images/background/showers.jpg";

export type Categories = {
	id: number;
	name: string;
	description: string;
	url: string;
	slug: string;
	image: string;
};

const response: Response = {
	"https://api.longevityacrylics.com/categories": {
		error: undefined,
		data: {
			categories: [
				{
					id: 1,
					name: "Bathtubs",
					description: "A variety of bathtubs designed for comfort and durability.",
					url: "/products/bathtubs",
					slug: "bathtubs",
					image: bathtubs
				},
				{
					id: 2,
					name: "Tub Showers",
					description: "Combination tub and shower units offering flexibility.",
					url: "/products/tub-showers",
					slug: "tub-showers",
					image: tubshowers
				},
				{
					id: 3,
					name: "Showers",
					description: "High-quality shower units available in multiple configurations.",
					url: "/products/showers",
					slug: "showers",
					image: showers
				}
			]
		}
	},
	"https://api.longevityacrylics.com/bathtubs": {
		error: undefined,
		data: {
			category: {
				id: 1,
				name: "Bathtubs",
				description: "A variety of bathtubs designed for comfort and durability.",
				url: "https://www.longevityacrylics.com/en/products/bathtubs",
				slug: "bathtubs",
				image: "/images/background/bathtubs.jpg",
				products: [
					{
						id: 1000,
						name: "Ambassador",
						description:
							"Experience ultimate relaxation in the spacious Ambassador bathtub. Perfect for soaking away stress.",
						specifications: {
							weight: "80",
							capacity: 170, // Numeric capacity
							dimensions: {
								length: 72,
								width: 36,
								height: 19.5
							}
						},
						images: ["https://longevityacrylics.com/images/products/ambassador-880x880.jpg"],
						price: "Not available"
					},
					{
						id: 2000,
						name: "Retreat",
						description:
							"Unwind in style with the Retreat bathtub.  Its deep soaking design provides a luxurious bathing experience.",
						specifications: {
							weight: "125",
							capacity: 150, // Numeric capacity
							dimensions: {
								length: 66,
								width: 36,
								height: 22
							}
						},
						images: ["https://longevityacrylics.com/images/products/retreat-880x880.jpg"], // Assuming similar image structure
						price: "Not available"
					},
					{
						id: 3000,
						name: "Edgewater",
						description: "The modern Edgewater bathtub adds a touch of elegance to any bathroom.",
						specifications: {
							weight: "135",
							capacity: 160, // Numeric capacity
							dimensions: {
								length: 66,
								width: 34,
								height: 24.5
							}
						},
						images: ["https://longevityacrylics.com/images/products/edgewater-880x880.jpg"], // Assuming similar image structure
						price: "Not available"
					},
					{
						id: 4000,
						name: "Novare",
						description:
							"The compact Novare bathtub is perfect for smaller bathrooms without sacrificing comfort.",
						specifications: {
							weight: "60",
							capacity: 120, // Numeric capacity
							dimensions: {
								length: 60,
								width: 32,
								height: 21.5
							}
						},
						images: ["https://longevityacrylics.com/images/products/novare-880x880.jpg"], // Assuming similar image structure
						price: "Not available"
					}
				]
			}
		}
	},
	"https://api.longevityacrylics.com/tub-showers": {
		error: undefined,
		data: {
			category: {
				id: 2,
				name: "Tub Showers",
				description: "Combination tub and shower units offering flexibility.",
				url: "https://www.longevityacrylics.com/en/products/tub-showers",
				slug: "tub-showers",
				image: "/images/background/tub-showers.jpg",
				products: [
					{
						id: 2000,
						name: "Horizon I-D",
						description:
							"The Horizon I-D tub shower unit offers a one-piece design for a seamless look in your bathroom.",
						specifications: {
							weight: 170, // Invented value
							dimensions: {
								length: 88.5,
								width: 60,
								height: 31.5
							}
						},
						images: ["https://longevityacrylics.com/images/products/horizon-i-d-880x880.jpg"], // Assuming similar image structure
						price: "Not available"
					},
					{
						id: 3000,
						name: "Horizon II-LT",
						description:
							"The Horizon II-LT tub shower unit provides functionality and style with its two-piece design.",
						specifications: {
							weight: 165, // Invented value
							dimensions: {
								length: 78.25,
								width: 60,
								height: 33
							}
						},
						images: ["https://longevityacrylics.com/images/products/horizon-ii-lt-880x880.jpg"], // Assuming similar image structure
						price: "Not available"
					},
					{
						id: 4000,
						name: "Renovation II",
						description:
							"The Renovation II tub shower unit is a perfect solution for bathroom renovations, offering a three-piece design for easy installation.",
						specifications: {
							weight: 190, // Invented value
							dimensions: {
								length: 84,
								width: 60,
								height: 33.5
							}
						},
						images: ["https://longevityacrylics.com/images/products/renovation-ii-880x880.jpg"], // Assuming similar image structure
						price: "Not available"
					}
				]
			}
		}
	},
	"https://api.longevityacrylics.com/showers": {
		error: undefined,
		data: {
			category: {
				id: 3,
				name: "Showers",
				description: "High-quality shower units available in multiple configurations.",
				url: "https://www.longevityacrylics.com/en/products/showers",
				slug: "showers",
				image: "/images/background/showers.jpg",
				products: [
					{
						id: 1000,
						name: "Rideau I",
						description:
							"The Rideau I shower unit provides a safe and comfortable showering experience. Perfect for bathrooms of all sizes.",
						specifications: {
							weight: "155", // Placeholder, weight may vary
							dimensions: {
								length: 78.25,
								width: 48,
								height: 33
							}
						},
						images: ["https://longevityacrylics.com/images/products/rideau-i-880x880.jpg"], // Assuming similar image structure
						price: "Not available"
					},
					{
						id: 2000,
						name: "Rideau II",
						description:
							"The Rideau II shower unit offers a spacious showering area with a modern design.",
						specifications: {
							weight: "160", // Invented value
							dimensions: {
								length: 82, // Invented value
								width: 36, // Invented value
								height: 84 // Invented value
							}
						},
						images: ["https://longevityacrylics.com/images/products/rideau-ii-880x880.jpg"], // Assuming similar image structure
						price: "Not available"
					}
				]
			}
		}
	},
	"https://api.longevityacrylics.com/bathtubs/1000": {
		error: undefined,
		data: {
			product: {
				id: 1000,
				name: "Ambassador",
				description:
					"Experience ultimate relaxation in the spacious Ambassador bathtub. Perfect for soaking away stress.",
				specifications: {
					weight: "80",
					capacity: 170, // Numeric capacity
					dimensions: {
						length: 72,
						width: 36,
						height: 19.5
					}
				},
				images: ["https://longevityacrylics.com/images/products/ambassador-880x880.jpg"],
				price: "Not available"
			}
		}
	},
	"https://api.longevityacrylics.com/bathtubs/2000": {
		error: undefined,
		data: {
			product: {
				id: 2000,
				name: "Retreat",
				description:
					"Unwind in style with the Retreat bathtub.  Its deep soaking design provides a luxurious bathing experience.",
				specifications: {
					weight: "125",
					capacity: 150, // Numeric capacity
					dimensions: {
						length: 66,
						width: 36,
						height: 22
					}
				},
				images: ["https://longevityacrylics.com/images/products/retreat-880x880.jpg"], // Assuming similar image structure
				price: "Not available"
			}
		}
	},
	"https://api.longevityacrylics.com/bathtubs/3000": {
		error: undefined,
		data: {
			product: {
				id: 3000,
				name: "Edgewater",
				description: "The modern Edgewater bathtub adds a touch of elegance to any bathroom.",
				specifications: {
					weight: "135",
					capacity: 160, // Numeric capacity
					dimensions: {
						length: 66,
						width: 34,
						height: 24.5
					}
				},
				images: ["https://longevityacrylics.com/images/products/edgewater-880x880.jpg"], // Assuming similar image structure
				price: "Not available"
			}
		}
	},
	"https://api.longevityacrylics.com/bathtubs/4000": {
		error: undefined,
		data: {
			product: {
				id: 4000,
				name: "Novare",
				description:
					"The compact Novare bathtub is perfect for smaller bathrooms without sacrificing comfort.",
				specifications: {
					weight: "60",
					capacity: 120, // Numeric capacity
					dimensions: {
						length: 60,
						width: 32,
						height: 21.5
					}
				},
				images: ["https://longevityacrylics.com/images/products/novare-880x880.jpg"], // Assuming similar image structure
				price: "Not available"
			}
		}
	},
	"https://api.longevityacrylics.com/tub-showers/2000": {
		error: undefined,
		data: {
			product: {
				id: 2000,
				name: "Horizon I-D",
				description:
					"The Horizon I-D tub shower unit offers a one-piece design for a seamless look in your bathroom.",
				specifications: {
					weight: 170, // Invented value
					dimensions: {
						length: 88.5,
						width: 60,
						height: 31.5
					}
				},
				images: ["https://longevityacrylics.com/images/products/horizon-i-d-880x880.jpg"], // Assuming similar image structure
				price: "Not available"
			}
		}
	},
	"https://api.longevityacrylics.com/tub-showers/3000": {
		error: undefined,
		data: {
			product: {
				id: 3000,
				name: "Horizon II-LT", // Replace with actual product name
				description:
					"The Horizon II-LT tub shower unit provides functionality and style with its two-piece design.", // Replace with actual description
				specifications: {
					weight: 165, // Invented value
					dimensions: {
						length: 78.25,
						width: 60,
						height: 33
					}
				},
				images: ["https://longevityacrylics.com/images/products/horizon-ii-lt-880x880.jpg"], // Replace with actual image URL (optional)
				price: "Not available"
			}
		}
	},
	"https://api.longevityacrylics.com/tub-showers/4000": {
		// Assuming there's another product (replace 4 with actual ID)
		error: undefined,
		data: {
			product: {
				id: 4000, // Replace with actual ID
				name: "Renovation II", // Replace with actual product name
				description:
					"The Renovation II tub shower unit is a perfect solution for bathroom renovations, offering a three-piece design for easy installation.", // Replace with actual description
				specifications: {
					weight: 190, // Invented value
					dimensions: {
						length: 84,
						width: 60,
						height: 33.5
					}
				},
				images: ["https://longevityacrylics.com/images/products/renovation-ii-880x880.jpg"], // Replace with actual image URL (optional)
				price: "Not available"
			}
		}
	},
	"https://api.longevityacrylics.com/showers/1000": {
		error: undefined,
		data: {
			product: {
				id: 1000,
				name: "Rideau I",
				description:
					"The Rideau I shower unit provides a safe and comfortable showering experience. Perfect for bathrooms of all sizes.",
				specifications: {
					weight: "155", // Placeholder, weight may vary
					dimensions: {
						length: 78.25,
						width: 48,
						height: 33
					}
				},
				images: ["https://longevityacrylics.com/images/products/rideau-i-880x880.jpg"], // Assuming similar image structure
				price: "Not available"
			}
		}
	},
	"https://api.longevityacrylics.com/showers/2000": {
		error: undefined,
		data: {
			product: {
				id: 2000,
				name: "Rideau II",
				description:
					"The Rideau II shower unit offers a spacious showering area with a modern design.",
				specifications: {
					weight: "160", // Invented value
					dimensions: {
						length: 82, // Invented value
						width: 36, // Invented value
						height: 84 // Invented value
					}
				},
				images: ["https://longevityacrylics.com/images/products/rideau-ii-880x880.jpg"], // Assuming similar image structure
				price: "Not available"
			}
		}
	}
};

export const fetch = async (url: string) =>
	url in response
		? response[url]
		: {
				error: new Error("Not found").toString(),
				data: undefined
			};
