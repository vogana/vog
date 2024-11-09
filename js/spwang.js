const videoList = [
          { name: '101', src: 'sp/clo001.mp4', description: 'clo3d视频', uploadDate: new Date('2023-01-15') },
          { name: '102', src: 'sp/clo002.mp4', description: 'clo3d视频', uploadDate: new Date('2023-01-15') },
          { name: '103', src: 'sp/clo003.mp4', description: 'clo3d视频', uploadDate: new Date('2023-01-15') },
          { name: '104', src: 'sp/clo004.mp4', description: 'clo3d视频', uploadDate: new Date('2023-01-15') },
          { name: '105', src: 'sp/clo005.mp4', description: 'clo3d视频', uploadDate: new Date('2023-01-15') },
          { name: '106', src: 'sp/clo006.mp4', description: 'clo3d视频', uploadDate: new Date('2023-01-15') },
			
          // 添加更多视频信息
        ];

        const videoNameToImage = {
          '101': 'images/wiu/1001.jpg',
          '102': 'images/wiu/1002.jpg',
          '103': 'images/wiu/1003.jpg',
          '104': 'images/wiu/1004.jpg',
          '105': 'images/wiu/1005.jpg',
          '106': 'images/wiu/1006.jpg',
          // 根据需要添加更多映射关系
        };

        const videoPlayer = document.getElementById('videoPlayer');
        const videoListContainer = document.getElementById('videoListContainer');
        const showListButton = document.getElementById('showListButton');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        let currentVideoIndex = 0;

        // 生成视频列表
        videoList.forEach((video, index) => {
          const videoItem = document.createElement('div');
          videoItem.classList.add('video-item');

          // 创建图像元素
          const thumbnail = document.createElement('img');
          thumbnail.src = videoNameToImage[video.name] || 'images/default-thumbnail.jpg'; // 默认缩略图路径
          thumbnail.classList.add('thumbnail');

          // 创建视频描述元素
          const videoDescription = document.createElement('span');
          videoDescription.textContent = video.description;

          // 将图像和描述元素添加到视频项中
          videoItem.appendChild(thumbnail);
          videoItem.appendChild(videoDescription);

          // 添加点击事件处理
          videoItem.addEventListener('click', () => playVideo(index));

          // 将视频项添加到视频列表容器
          videoListContainer.appendChild(videoItem);
        });

        // 播放视频
        function playVideo(index) {
          currentVideoIndex = index;
          const selectedVideo = videoList[index];
          videoPlayer.src = selectedVideo.src;
          videoPlayer.play();
        }

        // 控制按钮
        prevButton.addEventListener('click', () => {
          currentVideoIndex = Math.max(currentVideoIndex - 1, 0);
          playVideo(currentVideoIndex);
        });

        nextButton.addEventListener('click', () => {
          currentVideoIndex = Math.min(currentVideoIndex + 1, videoList.length - 1);
          playVideo(currentVideoIndex);
        });

        // 显示/隐藏视频列表
        showListButton.addEventListener('click', () => {
          if (videoListContainer.style.display === 'none' || videoListContainer.style.display === '') {
            videoListContainer.style.display = 'flex';
          } else {
            videoListContainer.style.display = 'none';
          }
        });

        // 根据屏幕宽度显示/隐藏按钮和名称列表
        function updateLayout() {
          if (window.innerWidth <= 1024) {
            videoListContainer.style.display = 'none';
            controlsContainer.style.display = 'flex';
          } else {
            videoListContainer.style.display = 'flex';
            controlsContainer.style.display = 'none';
          }
        }

        window.addEventListener('resize', updateLayout);
        updateLayout();
        
        // 响应滚轮事件，切换上一个或下一个视频
    function handleWheelEvent(event) {
      if (event.deltaY > 0) {
        currentVideoIndex = Math.min(currentVideoIndex + 1, videoList.length - 1);
      } else {
        currentVideoIndex = Math.max(currentVideoIndex - 1, 0);
      }
      playVideo(currentVideoIndex);
    }

    // 添加滚轮事件监听器
    window.addEventListener('wheel', handleWheelEvent);

    // 响应键盘按键事件，切换上一个或下一个视频
    function handleKeyboardEvent(event) {
      if (event.key === 'ArrowDown') {
        currentVideoIndex = Math.min(currentVideoIndex + 1, videoList.length - 1);
      } else if (event.key === 'ArrowUp') {
        currentVideoIndex = Math.max(currentVideoIndex - 1, 0);
      }
      playVideo(currentVideoIndex);
    }

    // 添加键盘按键事件监听器
    window.addEventListener('keydown', handleKeyboardEvent);
    