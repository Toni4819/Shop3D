body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  background: #f5f7fa;
  color: #333;
}

#liste-produits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 40px;
  max-width: 1200px;
  margin: auto;
}

.produit {
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s ease;
}

.produit:hover {
  transform: translateY(-5px);
}

.produit img {
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
  object-fit: cover;
  height: 180px;
}

.produit h3 {
  margin: 0 0 10px;
  font-weight: 700;
  color: #222;
}

.produit p {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 15px;
  min-height: 48px;
}

.produit button {
  background: #4a90e2;
  border: none;
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(74,144,226,0.3);
}

.produit button:hover {
  background: #357ABD;
}

#blur-background {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  background: rgba(0,0,0,0.3);
  z-index: 10;
  display: none;
}

#popup-form {
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px 40px;
  border-radius: 15px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  z-index: 20;
  display: none;
  max-width: 400px;
  width: 90%;
  font-size: 1rem;
}

#popup-form h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 700;
  color: #222;
}

#popup-form input[type="text"],
#popup-form input[type="email"] {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.25s ease;
}

#popup-form input[type="text"]:focus,
#popup-form input[type="email"]:focus {
  outline: none;
  border-color: #4a90e2;
}

#popup-form button {
  background: #4a90e2;
  border: none;
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(74,144,226,0.3);
  margin-right: 10px;
}

#popup-form button:hover {
  background: #357ABD;
}

#popup-form button[onclick] {
  background: #e74c3c;
  box-shadow: 0 4px 8px rgba(231,76,60,0.3);
}

#popup-form button[onclick]:hover {
  background: #c0392b;
}
