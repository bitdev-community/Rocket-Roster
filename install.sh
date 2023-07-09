echo "Checking if Bit is already installed..."
if ! command -v bit &> /dev/null
then
    echo "Bit is not installed, installing BVM and Bit..."
    npm i -g @teambit/bvm
    bvm install
    export PATH=$HOME/bin:$PATH
else
    echo "Bit is already installed!"
fi

echo "Bit version:"
bit -v
