echo "Checking if Bit is already installed..."
if ! command -v bit &> /dev/null
then
    echo "Bit is not installed, installing BVM and Bit..."
    npm i -g @teambit/bvm
    SHELL=bash bvm install
    echo "Bit is installed!"
    export PATH=$HOME/bin:$PATH
    echo "export PATH=$HOME/bin:$PATH" >> ~/.bashrc
else
    echo "Bit is already installed!"
fi

echo "Bit version:"
bit -v
bit install
