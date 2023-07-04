echo "Installing BVM..."
npm i -g @teambit/bvm
echo "Installing Bit..."
bvm install
export PATH=$HOME/bin:$PATH
echo "Installed Bit version:"
echo $(bit -v)
bit install