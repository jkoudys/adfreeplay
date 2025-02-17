# Use the official Rust image as a parent image
FROM rust:latest

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs

# Install npm
RUN apt-get install -y npm

# Create a non-root user to use Codespace
RUN useradd -ms /bin/bash vscode
USER vscode

# Set the working directory
WORKDIR /workspace