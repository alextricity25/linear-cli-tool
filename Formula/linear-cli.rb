class LinearCli < Formula
  desc "CLI tool for interacting with Linear"
  homepage "https://github.com/YOUR_USERNAME/linear-cli-tool"
  url "https://github.com/YOUR_USERNAME/linear-cli-tool/archive/refs/tags/v0.1.0.tar.gz"
  sha256 "REPLACE_WITH_ACTUAL_SHA_AFTER_RELEASE"
  license "MIT"

  depends_on "node"

  def install
    system "npm", "install", *Language::Node.std_npm_install_args(libexec)
    bin.install_symlink Dir["#{libexec}/bin/*"]
  end

  test do
    output = shell_output("#{bin}/linear --version")
    assert_match "0.1.0", output
  end
end