# Update and Upgrade Packages
apt-get update -y

# Get Setup Script
cd ~
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh

# Run Setup Script
bash nodesource_setup.sh

# Remove Setup Script
rm nodesource_setup.sh

# Install Node.js
apt-get install -y nodejs build-essential
