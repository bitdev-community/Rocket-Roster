echo "Installing BVM..."
npm i -g @teambit/bvm
echo "Setting BVM to nightly..."
bvm config set RELEASE_TYPE nightly
echo "Installing Bit..."
bvm install
export PATH=$HOME/bin:$PATH
echo "Installed Bit version:"
echo $(bit -v)
bit install