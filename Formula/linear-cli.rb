class LinearCli < Formula
  desc "CLI tool for interacting with Linear"
  homepage "https://github.com/alextricity25/linear-cli-tool"
  url "https://github.com/alextricity25/linear-cli-tool/archive/refs/tags/v0.1.0.tar.gz"
  sha256 "996139893cfbbf695416a0415150e070497b4b8c685bb2655c510d6d9e106097"
  license "MIT"

  depends_on "node"
  depends_on "yarn"

  def install
    system "yarn", "install"
    system "yarn", "build"
    libexec.install Dir["*"]
    bin.install_symlink libexec/"dist/index.js" => "linear"
  end

  test do
    output = shell_output("#{bin}/linear --version")
    assert_match "0.1.0", output
  end
end
