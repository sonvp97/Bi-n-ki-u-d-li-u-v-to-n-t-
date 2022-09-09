var pointPhysics,pointChemistry,pointBiological;
pointPhysics = prompt("Nhập điểm Vật Lý");
pointChemistry = prompt("Nhập điểm Hóa");
pointBiological = prompt("Nhập Điểm Sinh");

Physics = parseInt(pointPhysics);
Chemistry = parseInt(pointChemistry);
Biological = parseInt(pointBiological);

average=(Physics+Chemistry+Biological)/3;
Sum = Physics+Chemistry+Biological;

document.write("Điểm trung bình là" + average +"<br/>"+ "Tổng điểm là" + Sum );