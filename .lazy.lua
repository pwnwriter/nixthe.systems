return {

  {
    "neovim/nvim-lspconfig",
    name = "lspconfig",
    event = { "BufReadPost", "BufNewFile" },
  },

  vim.lsp.enable({ 'ts_ls', 'astro' }),
}
