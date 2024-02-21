const Trade = require('../models/tradeModel');

exports.getAllTrades = async (req, res) => {
  try {
    const trades = await Trade.find();
    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTrade = async (req, res) => {
  const newTrade = new Trade(req.body);
  try {
    const savedTrade = await newTrade.save();
    res.status(201).json(savedTrade);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTradeById = async (req, res) => {
  try {
    const trade = await Trade.findById(req.params.id);
    if (!trade) res.status(404).json({ message: 'Trade not found' });
    res.status(200).json(trade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTrade = async (req, res) => {
  try {
    const updatedTrade = await Trade.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTrade);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTrade = async (req, res) => {
  try {
    await Trade.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Trade deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};